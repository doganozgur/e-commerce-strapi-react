import { Container } from "../../styles/Utils";
import {
  Banner,
  Left,
  Products,
  ProductsInner,
  Right,
  Title,
} from "./Products.styled";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import { useState } from "react";
import ProductList from "../../components/layout/ProductList";
import { useParams } from "react-router-dom";
import useCategories from "../../hooks/useCategories";

export default function Product() {
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  const { id } = useParams();

  // Fetched sub categories
  const categories = useCategories();

  // Category
  const handleCategory = (e) => setCategory(e.target.value);
  // Handle price
  const handlePrice = (e) => setPrice(e.target.value);
  // Handle sort
  const handleSort = (e) => setSort(e.target.value);

  return (
    <Products>
      <Container>
        <ProductsInner>
          {/* Left */}
          <Left>
            {/* Filter by categories */}
            <Title>Product Categories</Title>
            <FormGroup className="mb-6">
              {/* Listing categories */}
              {categories &&
                categories.map(({ attributes: { title }, id }) => (
                  <FormControlLabel
                    key={id}
                    control={<Checkbox />}
                    label={title}
                    value={title.toLowerCase()}
                    onChange={handleCategory}
                    className="category-checkbox"
                  />
                ))}
            </FormGroup>
            {/* Filter by price */}
            <Title>Filter by Price</Title>
            <Slider
              className="mb-6"
              aria-label="price"
              value={price}
              onChange={handlePrice}
              max={2000}
              valueLabelDisplay="auto"
            />
            {/* Sort by */}
            <Title id="sort-by">Sort by</Title>
            <FormControl>
              <RadioGroup aria-labelledby="sort-by" name="sort-group">
                <FormControlLabel
                  value="asc"
                  control={<Radio />}
                  label="Sort(Low to high)"
                  onChange={handleSort}
                />
                <FormControlLabel
                  value="desc"
                  control={<Radio />}
                  label="Sort(High to low)"
                  onChange={handleSort}
                />
              </RadioGroup>
            </FormControl>
          </Left>
          {/* Right */}
          <Right>
            <Banner src="https://picsum.photos/1200/200" alt="" />
            <ProductList
              category={category}
              price={price}
              sort={sort}
              id={id}
            />
          </Right>
        </ProductsInner>
      </Container>
    </Products>
  );
}
