import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListContents.scss';

export class ListContents extends Component {
  render() {
    const { navigatorInfo, categoryHandler } = this.props;

    return (
      <div className="listContents">
        <Link to={`/list/category=${navigatorInfo.category_id}/subcateogry=0`}>
          <h3
            onClick={() => {
              categoryHandler(navigatorInfo.category_id, 0, navigatorInfo);
            }}
          >
            {navigatorInfo.name}
          </h3>
        </Link>
        <ul>
          {navigatorInfo.subcategories.map((data, i) => {
            return (
              <Link
                to={`/list/category=${navigatorInfo.category_id}/subcateogry=${data.subcategory_id}`}
                key={i}
              >
                <li
                  className="categoryList"
                  key={i}
                  subCategoryId={data.subcategory_id}
                  onClick={() => {
                    categoryHandler(
                      navigatorInfo.category_id,
                      data.subcategory_id,
                      navigatorInfo
                    );
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
