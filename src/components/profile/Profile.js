import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Image } from "primereact/image";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { Toast } from "primereact/toast";

import { getCvById, getImageByCvId } from "../../services/api";
import validator from "../../services/validator";

import "./Profile.css";

const Profile = (props) => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({});
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(null);

  const toast = useRef(null);

  useEffect(() => {
    const path = props?.path?.split("/");
    getCvById(path[path.length - 1])
      .then((res) => {
        if (res) {
          const profileSchema = validator.profileSchemaValidate(res);
          setValid(profileSchema);
        } else {
          setValid(null);
        }

        if (res && valid !== true) {
          valid.forEach((error) => {
            const message = {
              severity: "error",
              summary: "Error with json schema from responce",
              detail: `Error at '${error.instancePath}' keyword '${error.keyword}' with message '${error.message}'`,
              sticky: true,
            };

            toast.current.show(message);
          });
        } else {
          setProfile(res);
          setLoading(false);
        }

        setLoading(props?.projects && props?.experience);
      })
      .catch(() => {
        setLoading(false);
        setProfile({});
      });
  }, [props?.path, valid != null, valid == true]);

  useEffect(() => {
    const path = props?.path?.split("/");
    if (valid === true) {
      getImageByCvId(path[path.length - 1])
        .then((res) => {
          setImage(res ? res : "");
        })
        .catch(() => {
          setImage("");
        });
    } else {
      setImage("");
    }
  }, [props?.path, valid]);

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
        {!data?.projects && !data?.experience && !loading && (
          <h3>No data found!</h3>
        )}
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
              style={{ backgroundColor: "transparent", border: "none" }}
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
        <Toast ref={toast} />
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

      <div className="cv-content">
        <div hidden={!loading}>
          <ProgressSpinner
            style={{ width: "12vw", height: "12vh" }}
            strokeWidth="1"
            animationDuration="1s"
          />
        </div>
        {contentView(profile)}
      </div>
    </>
  );
};

export default Profile;
