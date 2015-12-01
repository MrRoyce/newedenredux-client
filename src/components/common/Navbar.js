'use strict';

import React from 'react';
import {Link} from 'react-router';
import { list } from '../../action_creators';
import {isEqual} from 'lodash';
import PureRenderMixin from 'react-addons-pure-render-mixin';
//import NavbarStore from '../stores/NavbarStore';
//import NavbarActions from '../actions/NavbarActions';

export default React.createClass({

  /*componentDidMount() {
    NavbarStore.listen(this.onChange);
    NavbarActions.getCharacterCount();

    let socket = io.connect();

    socket.on('onlineUsers', (data) => {
      NavbarActions.updateOnlineUsers(data);
    });

    $(document).ajaxStart(() => {
      NavbarActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        NavbarActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    let searchQuery = this.state.searchQuery.trim();

    if (searchQuery) {
      NavbarActions.findCharacter({
        searchQuery: searchQuery,
        searchForm: this.refs.searchForm,
        history: this.props.history
      });
    }
  }*/

  /*componentWillUnmount: function() { //1
    console.log('componentWillUnmount triggered');
  },*/

  /*componentWillReceiveProps: function(nextProps) {  // 2
    this.props.dispatch(list(nextProps.location.pathname));
  },*/

  /*componentWillUpdate: function() { // 3
    console.log('componentWillUpdate triggered');
  },*/

  // Get the new list when a link is clicked
  componentDidUpdate: function(prevProps) {  // 4
   // console.log('componentDidUpdate triggered');
    if (!isEqual(prevProps.location.pathname, this.props.location.pathname)) {
      this.props.dispatch(list(this.props.location.pathname));
    }
  },

  mixins: [PureRenderMixin],

  render() {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <Link to='/' className='navbar-brand'>
            <span className='triangles animated '> //{/* 'triangles animated ' + this.state.ajaxAnimationClass */}>
              <div className='tri invert'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
            </span>
            NEF
            <span className='badge badge-up badge-danger'>{/*this.state.onlineUsers*/}</span>
          </Link>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <form ref='searchForm' className='navbar-form navbar-left animated' >
            <div className='input-group'>
              <input type='text' className='form-control' placeholder={this.props.numCharacters + ' characters'} //{/*this.state.totalCharacters + ' characters'*/} value='' //{/*this.state.searchQuery} onChange={NavbarActions.updateSearchQuery*/}
              />
              <span className='input-group-btn'>
                <button className='btn btn-default' ><span className='glyphicon glyphicon-search'></span></button>
              </span>
            </div>
          </form>
          <ul className='nav navbar-nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/stats'>Stats</Link></li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>Top 100 <span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li><Link to='/top'>Top Overall</Link></li>
                <li className='dropdown-submenu'>
                  <Link to='/top/Caldari'>Caldari</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/top/Caldari/Achura'>Achura</Link></li>
                    <li><Link to='/top/Caldari/Civire'>Civire</Link></li>
                    <li><Link to='/top/Caldari/deteis'>Deteis</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='/top/Gallente'>Gallente</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/top/Gallente/Gallente'>Gallente</Link></li>
                    <li><Link to='/top/Gallente/Intaki'>Intaki</Link></li>
                    <li><Link to='/top/Gallente/Jin-Mei'>Jin-Mei</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='/top/Minmatar'>Minmatar</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/top/Minmatar/Brutor'>Brutor</Link></li>
                    <li><Link to='/top/Minmatar/Sebiestor'>Sebiestor</Link></li>
                    <li><Link to='/top/Minmatar/Vherokior'>Vherokior</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='/top/Amarr'>Amarr</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/top/Amarr/Amarr'>Amarr</Link></li>
                    <li><Link to='/top/Amarr/Ni-Kunni'>Ni-Kunni</Link></li>
                    <li><Link to='/top/Amarr/Khanid'>Khanid</Link></li>
                  </ul>
                </li>
                <li className='divider'></li>
                <li><Link to='/shame'>Hall of Shame</Link></li>
              </ul>
            </li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>Female <span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li><Link to='/Female'>All</Link></li>
                <li className='dropdown-submenu'>
                  <Link to='/Female/Caldari'>Caldari</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/Female/Caldari/Achura'>Achura</Link></li>
                    <li><Link to='/Female/Caldari/Civire/'>Civire</Link></li>
                    <li><Link to='/Female/Caldari/deteis'>Deteis</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='/Female/Gallente'>Gallente</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/Female/Gallente/Gallente'>Gallente</Link></li>
                    <li><Link to='/Female/Gallente/Intaki'>Intaki</Link></li>
                    <li><Link to='/Female/Gallente/Jin-Mei'>Jin-Mei</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='/Female/Minmatar'>Minmatar</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/Female/Minmatar/Brutor'>Brutor</Link></li>
                    <li><Link to='/Female/Minmatar/Sebiestor'>Sebiestor</Link></li>
                    <li><Link to='/Female/Minmatar/Vherokior'>Vherokior</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='/Female/Amarr'>Amarr</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/Female/Amarr/Amarr'>Amarr</Link></li>
                    <li><Link to='/Female/Amarr/Ni-Kunni'>Ni-Kunni</Link></li>
                    <li><Link to='/Female/Amarr/Khanid'>Khanid</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>Male <span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li><Link to='/Male'>All</Link></li>
                <li className='dropdown-submenu'>
                  <Link to='/Male/Caldari'>Caldari</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/Male/Caldari/Achura'>Achura</Link></li>
                    <li><Link to='/Male/Caldari/Civire'>Civire</Link></li>
                    <li><Link to='/Male/Caldari/deteis'>Deteis</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='/Male/Gallente'>Gallente</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/Male/Gallente/Gallente'>Gallente</Link></li>
                    <li><Link to='/Male/Gallente/Intaki'>Intaki</Link></li>
                    <li><Link to='/Male/Gallente/Jin-Mei'>Jin-Mei</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='/Male/Minmatar'>Minmatar</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/Male/Minmatar/Brutor'>Brutor</Link></li>
                    <li><Link to='/Male/Minmatar/Sebiestor'>Sebiestor</Link></li>
                    <li><Link to='/Male/Minmatar/Vherokior'>Vherokior</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='/Male/Amarr'>Amarr</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/Male/Amarr/Amarr'>Amarr</Link></li>
                    <li><Link to='/Male/Amarr/Ni-Kunni'>Ni-Kunni</Link></li>
                    <li><Link to='/Male/Amarr/Khanid'>Khanid</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><Link to='/add'>Add</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});
