# [Scarpa](https://scrapa-climbing.herokuapp.com/#/)
Inspired by Scarpa Climbing Company.

![](public/frontpage.gif)

## Background and Overview

Fullstack Clone with user-authentication using BCrypt, search and filter functionality, reviews section, and product ratings.

## Technologies

Backend: Ruby / Rails
Frontend: React / Redux
Amazon Web Service, PostgreSQL

## Primary Components
Cart functionality allows users to save products and return to them another time.
![](public/filter.gif)

Lookup specific products by name, or filter products by attributes in the sidenav.

```
  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleFilterAttrChange(attrId) {
    let id = parseInt(attrId);

    let newState = [];
    for (let i = 0; i < this.state.filterAttrs.length; i++) {
      newState.push(this.state.filterAttrs[i])
    }

    if (newState.includes(id)) {
      newState.splice(newState.indexOf(id), 1)
      return this.setState({
        filterAttrs: newState
      });
    } else {
      newState.push(id)
      return this.setState({
        filterAttrs: newState
      });
    }
  }
```

Custom photo carousel lets customers view shoe from different angles.
![](public/carousel.gif)

```
  previousSlide() {
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    
    this.setState({
      currentImageIndex: index
    });
  }
```

Each product page lists a detailed description of the product, size selection, listed attributes of each shoe, and a review section.
![](public/show.jpg)

```
  handleSubmit(e) {
    e.preventDefault();
    let reviewSubmit = Object.assign(
      {}, this.state, { product_id: this.props.product.id }
    );
    this.props.createReview(reviewSubmit)

    this.setState({
      rating: 5,
      username: '',
      body: ''
    })
  }

  handleOnClick(e) {
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
```


