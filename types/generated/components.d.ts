import type { Schema, Attribute } from '@strapi/strapi';

export interface CastActor extends Schema.Component {
  collectionName: 'components_cast_actors';
  info: {
    displayName: 'Actor';
    icon: 'alien';
  };
  attributes: {
    name: Attribute.String;
    Cover: Attribute.Media;
    Bio: Attribute.Blocks;
  };
}

export interface CastBlog extends Schema.Component {
  collectionName: 'components_cast_blogs';
  info: {
    displayName: 'Blog';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cast.actor': CastActor;
      'cast.blog': CastBlog;
    }
  }
}
