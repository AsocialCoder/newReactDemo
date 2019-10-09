import { notification } from "antd";

const openNotification = (title, description) => {
  notification.open({
    message: title,
    description: description,
    onClick: () => {
      notification.destroy()
    }
  });
};

export default openNotification;
