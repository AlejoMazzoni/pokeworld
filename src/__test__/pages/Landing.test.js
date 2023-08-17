import renderer from "react-test-renderer";
import Landing from "../../pages/landing/Landing";

describe("Landing", () => {
  it("renders everything correctly", () => {
    const component = renderer.create(<Landing />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
