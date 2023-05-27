import React from "react";
import "./Icon.css";

import { ReactComponent as ArrowIcon } from "../../icons/Arrow.svg";
import { ReactComponent as HouseIcon } from "../../icons/House.svg";
import { ReactComponent as LinkIcon } from "../../icons/Link.svg";
import { ReactComponent as GithubIcon } from "../../icons/Github.svg";
import { ReactComponent as LinkedinIcon } from "../../icons/Linkedin.svg";
import { ReactComponent as BehanceIcon } from "../../icons/Behance.svg";
import { ReactComponent as MailIcon } from "../../icons/Mail.svg";
import { ReactComponent as TelegramIcon } from "../../icons/Telegram.svg";

function Icon ({ name, modifier }){
  const DEFAULT_ICON = <ArrowIcon />;
  const Icons = {
    Arrow : <ArrowIcon />,
    House : <HouseIcon />,
    Link : <LinkIcon />,
    Github : <GithubIcon />,
    Linkedin : <LinkedinIcon />,
    Behance : <BehanceIcon />,
    Mail : <MailIcon />,
    Telegram : <TelegramIcon />
  }

  return ( 
    <i className={`Icon ${modifier}`}>
      { Icons[name] ? Icons[name] : DEFAULT_ICON }
    </i>
  );
}

export default Icon;