import React, { useEffect } from 'react';
import Spinner from '../Layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Repos from '../Repos/Repos';

const User = ({ user, loading, getUser, getUserRepos, repos, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;
  if (loading) return <Spinner />;
  return (
    <>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{''}
      {hireable ? (
        <FontAwesomeIcon icon="check" className="text-success" />
      ) : (
        <FontAwesomeIcon icon="times-circle" className="text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location :{location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username :</strong>
                  {login}
                </>
              )}
            </li>
          </ul>
          <ul>
            <li>
              {company && (
                <>
                  <strong>Company :</strong>
                  {company}
                </>
              )}
            </li>
          </ul>
          <ul>
            <li>
              {blog && (
                <>
                  <strong>Website :</strong>
                  {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers:{followers}</div>
        <div className="badge badge-success">following:{following}</div>
        <div className="badge badge-light">Public Repos:{public_repos}</div>
        <div className="badge badge-dark">Public Gists:{public_gists}</div>
      </div>
      <Repos repos={repos} />
    </>
  );
};
User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired
};
export default User;
