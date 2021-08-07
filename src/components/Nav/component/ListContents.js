import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListContents.scss';

export class ListContents extends Component {
  render() {
    const { main, subData, firstCategoryId, categoryHandler } = this.props;
    return (
      <div className="listContents">
        <Link to="/list">
          <h3
            onClick={() => {
              categoryHandler(main);
            }}
          >
            {main}
          </h3>
        </Link>
        <ul>
          {subData.map((data, i) => {
            return (
              <Link to="/list">
                <li
                  className="categoryList"
                  key={i}
                  subCategoryId={data.sub_category_id}
                  onClick={() => {
                    categoryHandler(data.sub_category_id);
                  }}
                >
                  {data.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListContents;
