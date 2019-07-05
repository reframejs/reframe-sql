import React from 'react';
import {endpoints} from 'wildcard-api/client';

export default {
  route: '/pets/:personId',
  view: Pets,
  title: 'List of pets',
  addInitialProps,
};

function Pets({person, pets}) {
  return (
    <div>
      {person.name+"'s pets:"}
      <ul>
        { pets.map(pet =>
          <li key={pet.id}>{pet.name}</li>
        ) }
      </ul>
    </div>
  );
}

async function addInitialProps({isNodejs, requestContext, personId}) {
  let {getPetsPageData} = endpoints;
  if( isNodejs ) getPetsPageData = getPetsPageData.bind(requestContext);
  const {person, pets} = await getPetsPageData(personId);
  return {person, pets};
}
