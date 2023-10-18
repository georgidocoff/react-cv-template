import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "primereact/image";
import { Button } from "primereact/button";

import { getCvById, getImageByCvId } from "../../services/api";

import "./Profile.css";

const Profile = (props) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [image, setImage] = useState("");

  useEffect(() => {
    const path = props?.path?.split("/");
    getCvById(path[path.length - 1]).then((res) => {
      setProfile(res ? JSON.parse(res) : {});
    });
  }, []);

  useEffect(() => {
    const path = props?.path?.split("/");
    getImageByCvId(path[path.length - 1]).then((res) => {
      setImage(res ? res : "");
    });
  }, []);
  const contactHandler = (data) => {
    if (data.includes("@")) {
      window.open(`mailto:${data}`, "_blank");
      return navigate(props?.path);
    } else if (data?.includes("https://")) {
      window.open(`${data}`, "_blank");
    } else if (data?.includes("+359")) {
      window.open(`tel:${data}`);
      return navigate(props?.path);
    }
  };

  const contactView = (data) => {
    let index = 0;
    return data?.map((e) => {
      return (
        // <div key={index} className={e.class}>
        //   <button
        //     onClick={(elem) => {
        //       console.log(elem.target);
        //     }}
        //     className={`row-${++index}`}
        //     title={e.name}
        //   >
        //     <i className={e.icon} />
        //   </button>
        // </div>
        <Button
          key={++index}
          icon={e.icon}
          className={e.class}
          label={e.name}
          name={e.name}
          onClick={(elem) => {
            contactHandler(e.name);
          }}
        />
      );
    });
  };

  const leftView = (data) => {
    return (
      <>
        <h3 className="ml-2" hidden={!data?.skills}>
          Skills
        </h3>
        {renderLeftView(data?.skills)}
        <h3 className="ml-2" hidden={!data?.educations}>
          Education
        </h3>
        {renderLeftView(data?.educations)}
        <h3 className="ml-2" hidden={!data?.certificates}>
          Certificates
        </h3>
        {renderLeftView(data?.certificates)}
        <h3 className="ml-2" hidden={!data?.languages}>
          Languages
        </h3>
        {renderLeftView(data?.languages)}
        <h3 className="ml-2" hidden={!data?.hobies}>
          Hobies
        </h3>
        {renderLeftView(data?.hobies)}
      </>
    );
  };

  const contentView = (data) => {
    return (
      <>
        <h3 hidden={!data?.projects}>Projects</h3>
        {renderContentView(data?.projects)}
        <h3 hidden={!data?.experience}>Experience</h3>
        {renderContentView(data?.experience)}
        {!data?.projects && !data?.experience && <h3>No data found!</h3>}
      </>
    );
  };

  function renderLeftView(view) {
    return view?.map((e) => {
      return (
        <div key={e.orderIdx} className="left-text mb-2">
          <div>{e.name}</div>
          <div>
            <i>{e.type}</i>
          </div>
        </div>
      );
    });
  }

  function renderContentView(view) {
    return view?.map((e) => {
      return (
        <div key={e.orderIdx} className="mb-2">
          <div>
            <b>{e.name}</b>
          </div>
          {(e.link && (
            <Button
              style={{ backgroundColor: "transparent", border:"none" }}
              label={e?.content || e?.link}
              onClick={() => {
                window.open(`${e?.link}`, "_blank");
              }}
            />
          )) || <div>{e.content}</div>}

          <div>{e.date}</div>
        </div>
      );
    });
  }

  return (
    <>
      <div className="cv-card flex">
        <Image
          src={
            image == ""
              ? "/images/avatar.png"
              : "data:image/png;base64, " + image
          }
          alt="profile-image"
        />
        <div className="cv-title flex">
          <p className="contact-name">{profile?.name}</p>
          {contactView(profile?.contacts)}
        </div>
      </div>
      <div className="cv-card left-column">{leftView(profile)}</div>
      <div className="cv-content">{contentView(profile)}</div>
    </>
  );
};

export default Profile;
