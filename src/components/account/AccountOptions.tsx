import { View } from "react-native";
import { ListItem, Icon, Text } from "react-native-elements";
import { map } from "lodash";
import { useState } from "react";
import { Modal } from "../shared/Modal";
import { ChangeDisplayNameForm } from "./ChangeDisplayNameForm";
export function AccountOptions() {
  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState<React.ReactNode>(null);

  const onCloseModal = () => setShowModal((prevState) => !prevState);

  const selectedComponent = (key: string) => {
    if (key === "change-name") {
      setRenderComponent(<ChangeDisplayNameForm onClose={onCloseModal} />);
    } else if (key === "change-email") {
      setRenderComponent(<Text>Cambiar correo electrónico</Text>);
    } else if (key === "change-password") {
      setRenderComponent(<Text>Cambiar contraseña</Text>);
    }
    onCloseModal();
  };

  const menuOptions = getMenuOptions(selectedComponent);
  return (
    <View>
      {map(menuOptions, (menu, index) => (
        <ListItem key={index} bottomDivider onPress={menu.onPress}>
          <Icon
            type={menu.iconType}
            name={menu.iconNameLeft}
            color={menu.iconColorLeft}
          />
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
          <Icon
            type={menu.iconType}
            name={menu.iconNameRight}
            color={menu.iconColorRight}
          />
        </ListItem>
      ))}
      <Modal show={showModal} close={onCloseModal}>
        {renderComponent}
      </Modal>
    </View>
  );
}

function getMenuOptions(selectedComponent: (key: string) => void) {
  return [
    {
      title: "Cambiar nombre y apellidos",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("change-name"),
    },
    {
      title: "Cambiar correo electrónico",
      iconType: "material-community",
      iconNameLeft: "at",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("change-email"),
    },
    {
      title: "Cambiar contraseña",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("change-password"),
    },
  ];
}
