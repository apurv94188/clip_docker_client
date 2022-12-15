import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';


export class Landing extends Component {

      render () {


            return (
                  <div>
                        <Link to='/toSingup'>Sign Up</Link>
                        <Link to='/login'>Login</Link>
                  </div>
            )
      }
}