import React from "react";
import { Card, Icon, Avatar } from "antd";
import {useHistory} from "react-router-dom"

const { Meta } = Card;

const NotFound = ({ location }) => {
    const history = useHistory();

  return (
    <div className="NotFoundCardContainer">
      <Card
        className="NotFoundCard"
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
            <Icon type="home" key="home"  onClick={()=>history.push("/")}/>
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="404"
          description={`${location.pathname} bulunamadı`}
        />
      </Card>
    </div>
  );
};

export default NotFound;
