import React from 'react';

import { FaTwitterSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineLink } from 'react-icons/ai';

import { ShareSection } from './styles';

export default ({ data, slug, isDark }) => {
  const URL = `https://voib.jesusbossa.dev/${slug}`;
  const copyClipboard = () => {
    navigator.clipboard
      .writeText(URL)
      .then(() => alert(`Se ha copiado la URL para que la compartas`))
      .catch(() => console.log('No copiado'));
  };

  return (
    <ShareSection isDark={isDark}>
      <a href={`https://www.facebook.com/sharer/sharer.php?t=hola mundo&u=${URL}`} target="_blank">
        <FaFacebookSquare />
      </a>
      <a href={`https://twitter.com/intent/tweet?text=${data.title}&url=${URL}&hashtags=${data.tags.join(',')}`} target="_blank">
        <FaTwitterSquare />
      </a>
      <a href={`https://www.linkedin.com/shareArticle?&url=${URL}&title=${data.title}`} target="_blank">
        <FaLinkedin />
      </a>
      <span onClick={copyClipboard}>
        <AiOutlineLink />
      </span>
    </ShareSection>
  );
};
