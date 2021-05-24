import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Category({id,nameCategory}) {
    return (
       <div>
        <div className="list-group">
        <Link to={`/categories/${id}`} className="list-group-item list-group-item-action ">
          {nameCategory}
        </Link>
      </div>
    </div>
        
        
    )
}
