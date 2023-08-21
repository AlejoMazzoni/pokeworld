import renderer from "react-test-renderer";
import NotFound from "../../pages/404/NotFound";
import { HashRouter } from "react-router-dom";

describe("NotFound", () => {
  it("renders everything correctly", () => {
    const component = renderer.create(
      <HashRouter>
        <NotFound />
      </HashRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
