import renderer from "react-test-renderer";
import Button from "../../../components/ui/Button";

describe("Button", () => {
  it("renders everything correctly", () => {
    const component = renderer.create(<Button>Click me</Button>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
