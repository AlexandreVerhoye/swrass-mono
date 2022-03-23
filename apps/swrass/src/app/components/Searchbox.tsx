import styled from 'styled-components';

const SearchInput = styled.input`
  position: relative;
  outline: 0;
  padding: 1em;
  border: 1px solid white;
  height: 5rem;
  font-family: var(--font-family-terminal);
  border: 0;
  color: var(--color-dark);
  font-size: 1.8rem;
  width: 100%;
  background: var(--color-light);
  padding: 0 1.6rem;
  border-radius: var(--rad);
  appearance: none;
  transition: all var(--dur) var(--bez);
  transition-property: width, border-radius;
  z-index: 1;

  &:not(:placeholder-shown) {
    border-radius: var(--rad) 0 0 var(--rad);
    width: calc(100% - 6rem);
    + button {
      display: block;
  }
`;

const SearchButton = styled.button`
  height: 5rem;
  font-family: var(--font-fam);
  border: 0;
  color: var(--color-white);
  font-size: 1.8rem;
  display: none; // prevent being able to tab to it
  position: absolute;
  top: 0;
  right: 0;
  width: 6rem;
  font-weight: bold;
  background: var(--color-brand);
  border-radius: 0 var(--rad) var(--rad) 0;
`;

const FormContainer = styled.form`
  position: relative;
  width: 30rem;
  background: var(--color-brand);
  border-radius: var(--rad);
`;

const Searchbox: React.FC = () => {
  return (
    <FormContainer role="search">
      <SearchInput id="search" type="search" placeholder="Search..." required />
      <SearchButton type="submit">GO</SearchButton>
    </FormContainer>
  );
};

export default Searchbox;
