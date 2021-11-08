import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Search from "../../components/Search";

const mockhandleSearch = jest.fn();
const mocksetCeptNumber = jest.fn();
const mockCepNumber = "12345678";
const mockCeps = {
  cep: "",
};

jest.mock("./../../providers/CepProvider", () => {
	return {
	  useLocateCep: () => ({
		handleSearch: mockhandleSearch,
		cepNumber: mockCepNumber,
		setCepNumber: mocksetCeptNumber,
		ceps: mockCeps,
	  }),
	};
  });

describe("Search and Cep components", () => {
	test("should be able to find full address from postcode", async () => {
		render(<Search />);
		
        const searchField = screen.getByPlaceholderText("Insira o CEP");
        const buttonSearch = screen.getByText("Buscar pelo CEP");

		fireEvent.change(searchField, { target: { value: "12345678" } });
		fireEvent.click(buttonSearch);
			
		await waitFor(() => {
			expect(searchField).toHaveValue(12345678);
			expect(buttonSearch).toBeEnabled();
			expect(mockhandleSearch).toHaveBeenCalledWith("12345678");
		});
	});
});