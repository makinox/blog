import React from 'react';
import renderer from 'react-test-renderer';
import { ImageDataLike } from 'gatsby-plugin-image';

import AuthorImage from '../../components/AuthorImage/AuthorImage';

export const AUTHOR_IMAGE_MOCK: ImageDataLike = {
  layout: 'constrained',
  placeholder: {
    fallback:
      'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQEG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQIA/9oADAMBAAIQAxAAAAG7WvZWdlEx5qMqeiX/xAAbEAEAAgIDAAAAAAAAAAAAAAACAQMAIQQSMf/aAAgBAQABBQLkWsum9i1Ru+R1iwxYntNLPcixRn//xAAVEQEBAAAAAAAAAAAAAAAAAAAgQf/aAAgBAwEBPwGD/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHRAAAgICAwEAAAAAAAAAAAAAAQIAESFBEBIxUf/aAAgBAQAGPwJUQhbzcCu3YNv5wL91E7jfFkzMwZ//xAAcEAEBAQABBQAAAAAAAAAAAAABEQAhQVFhgbH/2gAIAQEAAT8hm4FMuoW8O5j0zMvjjm33uJ5x9eXrX5lVVXBxQ3//2gAMAwEAAgADAAAAELDIQv/EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPxADTCf/xAAWEQEBAQAAAAAAAAAAAAAAAAABEEH/2gAIAQIBAT8QcjP/xAAfEAEAAgEEAwEAAAAAAAAAAAABABEhMUFRYXGx0fD/2gAIAQEAAT8QJiLhYGqCEHd0D8eohYhFCNtldw/cTAwyLi4vr3LKglSl+NmceBtHjE1WZvhpP//Z',
  },
  images: {
    fallback: {
      src: '/static/2a955830c78416818ec70aa3b21df7ca/e07e1/photo.jpg',
      srcSet:
        '/static/2a955830c78416818ec70aa3b21df7ca/74ef0/photo.jpg 25w,\n/static/2a955830c78416818ec70aa3b21df7ca/6ac16/photo.jpg 50w,\n/static/2a955830c78416818ec70aa3b21df7ca/e07e1/photo.jpg 100w,\n/static/2a955830c78416818ec70aa3b21df7ca/dd515/photo.jpg 200w',
      sizes: '(min-width: 100px) 100px, 100vw',
    },
    sources: [
      {
        srcSet:
          '/static/2a955830c78416818ec70aa3b21df7ca/c5779/photo.avif 25w,\n/static/2a955830c78416818ec70aa3b21df7ca/b79cb/photo.avif 50w,\n/static/2a955830c78416818ec70aa3b21df7ca/6d0de/photo.avif 100w,\n/static/2a955830c78416818ec70aa3b21df7ca/f2685/photo.avif 200w',
        type: 'image/avif',
        sizes: '(min-width: 100px) 100px, 100vw',
      },
      {
        srcSet:
          '/static/2a955830c78416818ec70aa3b21df7ca/2fa99/photo.webp 25w,\n/static/2a955830c78416818ec70aa3b21df7ca/dbc4a/photo.webp 50w,\n/static/2a955830c78416818ec70aa3b21df7ca/d8057/photo.webp 100w,\n/static/2a955830c78416818ec70aa3b21df7ca/2e34e/photo.webp 200w',
        type: 'image/webp',
        sizes: '(min-width: 100px) 100px, 100vw',
      },
    ],
  },
  width: 100,
  height: 100,
};

describe('AuthorImage', () => {
  const authorName = 'Jejejesu';
  const tree: any = renderer.create(<AuthorImage authorName={authorName} imageSrc={AUTHOR_IMAGE_MOCK} />).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  it('shows assigned alt name', () => {
    console.log(tree.children[2].children[2].props.alt);
    expect(tree.children[2].children[2].props.alt).toEqual(`Autor ${authorName}`);
  });
});
