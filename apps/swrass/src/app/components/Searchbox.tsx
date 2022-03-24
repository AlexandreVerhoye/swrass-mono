import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const SearchboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;
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
  appearance: none;
  transition: all var(--dur) var(--bez);
  transition-property: width, box-shadow;
  z-index: 1;

  &:not(:placeholder-shown) {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const FormContainer = styled.form`
  position: relative;
  width: 30rem;
  background: var(--color-brand);
`;

const FilterSelectorContainer = styled.div`
  position: relative
    display: block
    max-width: 400px
    min-width: 180px
    margin: 0 auto
    border: 1px solid #3C1C78
    background-color: #16013E
    z-index: 10

  &:select {
    border: none
    outline: none
    background: transparent
    -webkit-appearance: none
    -moz-appearance: none
    appearance: none
    border-radius: 0
    margin: 0
    display: block
    width: 100%
    padding: 12px 55px 15px 15px
    font-size: 14px
    color: #714BB9

    &:after {
      position: absolute
      right: 0
      top: 0
      width: 50px
      height: 100%
      line-height: 38px
      content: '\2228'
      text-align: center
      color: #714BB9
      font-size: 24px
      border-left: 1px solid #3C1C78
      z-index: -1
    }
  }
`;

type FormData = {
  keywords: string;
  filter?: string;
};

type SearboxProps = {
  callback: (keywords: string) => void;
  value?: string | null;
  filter?: string;
  hasFilterSelector?: boolean;
};

const Searchbox: React.FC<SearboxProps> = ({
  callback,
  value,
  filter,
  hasFilterSelector,
}) => {
  const { register, handleSubmit, setValue } = useForm<FormData>();

  useEffect(() => {
    if (value) setValue('keywords', value);
    if (filter) setValue('filter', filter);
  });

  const onSubmit = handleSubmit((data) => callback(data.keywords));

  return (
    <SearchboxContainer>
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
      {hasFilterSelector && (
        <FilterSelectorContainer>
          <select {...register('filter')}>
            <option value="any">Any</option>
            <option value="people">People</option>
            <option value="sharships">Starships</option>
            <option value="films">Films</option>
            <option value="planets">Planets</option>
            <option value="species">Species</option>
            <option value="vehicles">Vehicles</option>
          </select>
        </FilterSelectorContainer>
      )}
    </SearchboxContainer>
  );
};

export default Searchbox;
