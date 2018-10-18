import React from "react";

/**
 * @type {React.SFC<IGithubUser>}
 */
export const GithubProfile = ({
  login,
  avatar_url,
  bio,
  html_url,
  location
}) => (
  <div className="github">
    <h1>
      <a className="github__link" href={html_url} target="blank" rel="noopener nofollow">
        {login}
      </a>
    </h1>
    <h3>{location}</h3>
    <p>{bio}</p>
    <img src={avatar_url} alt="github profile avatar" />
  </div>
);
