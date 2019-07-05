import React from 'react';
import {endpoints} from 'wildcard-api/client';

export default {
  route: '/',
  view: Persons,
  title: 'List of persons',
  addInitialProps,
};

function Persons({persons}) {
  return (
    <>
      Persons:
      <ul>
        { persons.map(person =>
          <li key={person.id}>
            <a href={"/pets/"+person.id}>
              {person.name}
            </a>
          </li>
        ) }
      </ul>
    </>
  );
}

async function addInitialProps({isNodejs, requestContext}) {
  let {getLandingPageData} = endpoints;
  if( isNodejs ) getLandingPageData = getLandingPageData.bind(requestContext);
  const {persons} = await getLandingPageData();
  return {persons};
}
