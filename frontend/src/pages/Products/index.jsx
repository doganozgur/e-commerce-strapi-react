import FilterByCategories from "../../components/controls/FilterByCategories";
import FeaturedProducts from "../../components/layout/FeaturedProducts";
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
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import { useState } from "react";

export default function Product() {
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(1000);
  const [sort, setSort] = useState(null);

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
              <FormControlLabel
                control={<Checkbox />}
                label="Hat"
                value="hat"
                onChange={handleCategory}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Shirt"
                value="shirt"
                onChange={handleCategory}
              />
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
            <FeaturedProducts type="featured" />
          </Right>
        </ProductsInner>
      </Container>
    </Products>
  );
}
