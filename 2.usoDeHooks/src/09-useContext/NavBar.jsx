import { Link , NavLink } from "react-router-dom";

export const NavBar = () => {
      return (
          <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-opacity-25 rounded-3 mt-3">

                <div className="container-fluid">

                      <Link className="navbar-brand" to="/">useContext</Link>

                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                              aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                            <div className="navbar-nav">
                                  {/*end -> Nos determina que no se quedara siempre activa
                                    se podría ocupar en el caso de que tuvieramos links descendiento del mismo
                                   Entonces quedaría activo y los links que le siguen sería dependiendo*/ }
                                  <NavLink className={ ( { isActive } ) => {
                                        return `'link-secondary nav-link ${ isActive ? 'active' : ' ' }`
                                  } } to={ '/' } end>Home</NavLink>

                                  <NavLink className={ ( { isActive } ) => {
                                        return ` 'link-secondary nav-link ${ isActive ? 'active' : ' ' }`
                                  } } to={ '/about' }>About</NavLink>

                                  <NavLink className={ ( { isActive } ) => {
                                        return ` 'link-secondary nav-link ${ isActive ? 'active' : ' ' }`
                                  } } to={ '/login' }>Log In</NavLink>
                            </div>
                      </div>
                </div>
          </nav>
      )
}
