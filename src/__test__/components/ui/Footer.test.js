import renderer from "react-test-renderer";
import Footer from "../../../components/ui/Footer/Footer";

describe("Footer", () => {
  it("renders everything correctly", () => {
    const component = renderer.create(<Footer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
