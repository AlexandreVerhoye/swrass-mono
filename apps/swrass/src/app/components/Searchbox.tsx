import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

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
  transition-property: width, border-radius, box-shadow;
  z-index: 1;

  &:not(:placeholder-shown) {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: var(--rad) 0 0 var(--rad);
    width: calc(100% - 6rem);
    + button {
      display: block;
  }
`;

const SearchButton = styled.button`
  height: 5rem;
  font-family: var(--font-family);
  border: 0;
  color: var(--color-light);
  font-size: 1.8rem;
  display: none; // prevent being able to tab to it
  position: absolute;
  top: 0;
  right: 0;
  width: 6rem;
  font-weight: bold;
  background: var(--color-brand);
  border-radius: 0 var(--rad) var(--rad) 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const FormContainer = styled.form`
  position: relative;
  width: 30rem;
  background: var(--color-brand);
  border-radius: var(--rad);
`;

type FormData = {
  keywords: string;
  filters?: Array<string>;
};

type SearboxProps = {
  callback: (keywords: string) => void;
  value?: string;
  hasFilterSelector?: boolean;
};

const Searchbox: React.FC<SearboxProps> = (props) => {
  const { register, handleSubmit, setValue } = useForm<FormData>();

  useEffect(() => {
    if (props.value) setValue('keywords', props.value);
  });

  const onSubmit = handleSubmit((data) => props.callback(data.keywords));

  return (
    <FormContainer onSubmit={onSubmit} role="search">
      <SearchInput
        {...register('keywords')}
        autoFocus
        aria-label="search keywords"
        type="search"
        placeholder="Search..."
        required
      />
      <SearchButton type="submit">GO</SearchButton>
    </FormContainer>
  );
};

export default Searchbox;
