import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  handleOrderSelector: (order: string) => void;
  sortOrder: string;
}

const OrderSelector = ({ sortOrder, handleOrderSelector }: Props) => {
  const sortOrders = [
    { value: "", label: "Relavance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  console.log(sortOrders.find((o) => o.value === sortOrder)?.label);
  return (
    <Menu>
      <MenuButton as={Button} marginLeft={2} rightIcon={<BsChevronDown />}>
        Order By :{" "}
        {sortOrders.find((o) => o.value === sortOrder)?.label || "Relavance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            onClick={() => {
              handleOrderSelector(order.value);
            }}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderSelector;
