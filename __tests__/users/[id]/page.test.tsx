import { render } from "@testing-library/react";
import UserDetailPage from "../../../app/users/[id]/page";

jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

import { notFound } from "next/navigation";

describe("Testing UserDetailPage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly for a valid id", async () => {
    const props = { params: { id: 5 } };

    const Component = await UserDetailPage(props);

    const { getByText } = render(Component as React.ReactElement);
    expect(getByText("UserDetailPage 5")).toBeInTheDocument();
  });

  it("calls notFound for id > 10", async () => {
    const props = { params: { id: 15 } };

    await UserDetailPage(props);

    expect(notFound).toHaveBeenCalledTimes(1);
  });
});
