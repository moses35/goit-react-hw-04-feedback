import PropTypes from 'prop-types';
import { Title } from 'components/Section/Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <span>{children}</span>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
