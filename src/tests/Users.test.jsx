import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Users from "../components/Users";
import * as api from "../services/serviceData";

jest.mock("../services/serviceData");

test("muestra la data cuando damos click al botón", async () => {
  api.getData.mockResolvedValue([
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
  ]);

  render(<Users />);
  const button = screen.getByText("Get Data");
  fireEvent.click(button);

  const dataList = await waitFor(() => screen.findAllByRole("listitem"));
  expect(dataList).toHaveLength(2);
  expect(dataList[0]).toHaveTextContent("Michael")
  expect(dataList[1]).toHaveTextContent("Lindsay")
});
