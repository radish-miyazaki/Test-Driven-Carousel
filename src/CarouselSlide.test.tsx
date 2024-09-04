import { render, screen } from "@testing-library/react";
import CarouselSlide, { ScaledImg } from "./CarouselSlide";
import styled from "styled-components";

describe("CarouselSlide", () => {
  it("renders a <figure>", () => {
    render(<CarouselSlide />);
    expect(screen.getByRole("figure")).toBeInTheDocument();
  });

  it("renders an <img> and a <figcaption>", () => {
    render(<CarouselSlide />);

    const figure = screen.getByRole("figure");
    const img = screen.getByRole("img");
    const figcaption = screen.getByTestId("caption");
    expect(figure).toContainElement(img);
    expect(figure).toContainElement(figcaption);
  });

  it("passes `imgUrl` through to the <img>", () => {
    const imgUrl = "https://example.com/image.png";
    render(<CarouselSlide imgUrl={imgUrl} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", imgUrl);
  });

  it("uses `description` and `attribution` as the caption", () => {
    const props = {
      description: "A jaw-droppingly spectacular image",
      attribution: "Trevor Burnham",
    };
    render(<CarouselSlide {...props} />);
    const figcaption = screen.getByTestId("caption");
    expect(figcaption).toHaveTextContent(
      `${props.description} ${props.attribution}`,
    );
  });

  it("passes other props through to the <figure>", () => {
    const className = "my-carousel-slide";
    const dataAction = "prev";

    render(<CarouselSlide className={className} data-action={dataAction} />);
    const figure = screen.getByRole("figure");
    expect(figure).toHaveClass(className);
    expect(figure).toHaveAttribute("data-action", dataAction);
  });

  it("has the expected static styles", () => {
    render(<CarouselSlide />);

    const img = screen.getByRole("img");
    expect(img).toHaveStyleRule("object-fit", "cover");
    expect(img).toHaveStyleRule("width", "100%");
  });

  it("uses `imgHeight` as the height of the <img>", () => {
    render(<CarouselSlide imgHeight="123px" />);
    expect(screen.getByRole("img")).toHaveStyleRule("height", "123px");
  });

  it("allows styles to be overridden with `ImgComponent`", () => {
    const TestImg = styled(ScaledImg)`
      width: auto;
      object-fit: fill;
    `;

    render(<CarouselSlide ImgComponent={TestImg} imgHeight={250} />);
    expect(screen.getByRole("img")).toHaveStyleRule("width", "auto");
    expect(screen.getByRole("img")).toHaveStyleRule("height", "250px");
    expect(screen.getByRole("img")).toHaveStyleRule("object-fit", "fill");
  });
});
