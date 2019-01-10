import React from "react";
import { Map, List, fromJS } from "immutable";
import "antd/dist/antd.css";
import { Menu, Icon, Switch, Modal } from "antd";
import Cookies from "js-cookie";

const SideNavLeft = props => {
  const { SubMenu } = Menu;
  const { collapsed, sideNavLeft } = props;
  return (
    <div>
      {collapsed ? (
        <Menu
          mode="inline "
          theme={
            Cookies.get("leftTheme") ? Cookies.get("leftTheme") : sideNavLeft
          }
        >
          <Menu.Item
            title="Home"
            key="10"
            style={{
              backgroundColor: "#123a5f",
              padding: "2.2em",
              marginTop: "0"
            }}
          >
            <Icon
              type="frown"
              theme="twoTone"
              style={{
                fontSize: "2em",
                position: "relative",
                top: collapsed ? null : "-.7em",
                marginLeft: "-.2em"
              }}
            />

            <span
              style={{
                color: "white",

                outlineColor: "red",
                fontSize: "1.8em",
                fontFamily: "Comic Sans MS, cursive, sans-serif",
                position: "relative",
                top: collapsed ? null : "-.7em"
              }}
            >
              NB-Dms
            </span>
          </Menu.Item>

          <Menu.Item key="1">
            <Icon
              type="home"
              theme="twoTone"
              twoToneColor="skyblue"
              style={{ fontSize: "1.2em" }}
            />
            <span> Dashboard </span>
          </Menu.Item>

          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="user" style={{ color: "red", fontSize: "1.2em" }} />
                <span>User Actions</span>
              </span>
            }
          >
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon
                  type="desktop"
                  style={{ color: "orange", fontSize: "1.2em" }}
                />
                <span>Desktop Actions</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 3</Menu.Item>
            <Menu.Item key="6">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon
                  type="file-sync"
                  style={{ color: "lightgreen", fontSize: "1.2em" }}
                />
                <span>From Csv</span>
              </span>
            }
          >
            <Menu.Item key="7">Option 7</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon
                  type="alert"
                  style={{ color: "#FE5151", fontSize: "1.2em" }}
                />
                <span>Monitoring</span>
              </span>
            }
          >
            <Menu.Item key="8">Option 7</Menu.Item>
          </SubMenu>
        </Menu>
      ) : (
        <Menu
          mode="inline"
          theme={
            Cookies.get("leftTheme") ? Cookies.get("leftTheme") : sideNavLeft
          }
        >
          <Menu.Item
            title="Home"
            key="10"
            style={{
              backgroundColor: "#123a5f",
              padding: "2.2em",
              marginTop: "0"
            }}
          >
            <Icon
              type="frown"
              theme="twoTone"
              style={{
                fontSize: "2em",
                position: "relative",
                top: collapsed ? null : "-.7em"
              }}
            />

            <span
              style={{
                color: "white",

                outlineColor: "red",
                fontSize: "1.8em",
                fontFamily: "Comic Sans MS, cursive, sans-serif",
                position: "relative",
                top: collapsed ? null : "-.7em"
              }}
            >
              NB-Dms
            </span>
          </Menu.Item>

          <Menu.Item key="1">
            <Icon
              type="home"
              theme="twoTone"
              twoToneColor="skyblue"
              style={{ fontSize: "1.2em" }}
            />
            <span> Dashboard </span>
          </Menu.Item>

          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="user" style={{ color: "red", fontSize: "1.2em" }} />
                <span>User Actions</span>
              </span>
            }
          >
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon
                  type="desktop"
                  style={{ color: "orange", fontSize: "1.2em" }}
                />
                <span>Desktop Actions</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 3</Menu.Item>
            <Menu.Item key="6">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon
                  type="file-sync"
                  style={{ color: "lightgreen", fontSize: "1.2em" }}
                />
                <span>From Csv</span>
              </span>
            }
          >
            <Menu.Item key="7">Option 7</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon
                  type="alert"
                  style={{ color: "#FE5151", fontSize: "1.2em" }}
                />
                <span>Monitoring</span>
              </span>
            }
          >
            <Menu.Item key="8">Option 7</Menu.Item>
          </SubMenu>
        </Menu>
      )}
    </div>
  ); // end Return
}; // end App

export default SideNavLeft;
