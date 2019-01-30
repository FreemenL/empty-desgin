import React, { Component } from "react";
import { Row, Col, Tooltip, Icon } from "antd";
import { tool } from "../utils/utils";
import styles from "./index.less";

/**
 * [EListHoc description]
 * @Author   freemenL
 * @param    {[type]}                 data                       []
 * @param    {[type]}                 Effect?:any [自定义组件]
 *
 *用例： 
 *return EListHoc({
	"班次名称":"name",
	"所属部门":"deptName",
	"班次类型":"dutyType",
	"上班时间":"startTime",
	"下班时间":"endTime",
	"上班打卡时间范围":"onRange",
	"下班打卡时间范围":"offRange",
	"午休时间":"duration"
},Test)
 *
 * 
 */
const emptyListpanel = styles["empty-list-panel"];
const emptyListpanelList = styles["empty-list-panel-list"];

const { transData } = tool;
function EListHoc(data, Effect?: any) {
  
  const textAlign = data.textAlign || 'center';
  const type = data.type || "default";
  const panelStyle = { width: data.width || "", padding: data.interlayer ? 0 : '5px 0px' };
  const bordered = {border:data.bordered?"1px solid #eee":"none"};
  const listClass = data.interlayer ? "" : emptyListpanelList;
  const listContentStyle = {textAlign:data.interlayer ? textAlign : ""};


  if (_.isEmpty(data)) {
    return ({ params }) => <Effect />;
  }

  const listResult = {
    panel: function () {
      return (
        <ul className={emptyListpanel} style={panelStyle}>
          {data.data.map((dataItem, index) => {
            const interlayer = data.interlayer && (!(index %= 2));
            return (
              <li
                key={dataItem.title}
                style={{ background: interlayer ? "#e7f1fa" : "" }}
                onClick={dataItem.click && dataItem.click.bind(this)}
                className={listClass}
              >
                {dataItem.icon ? <Icon type={dataItem.icon} /> : null}
                <em style={listContentStyle}>{dataItem.title}</em>
              </li>
            );
          })}
        </ul>
      );
    },
    default: function ({ params }) {
      const currentData = transData(params)(data.data);
      return (
        <section className={styles["empty-detail-wrapper"]} style={bordered}>
          <Row gutter={24}>
            {currentData.map((item, index) => {
              return (
                <Col
                  key={`listWrapper${Math.random()}`}
                  xxl={16}
                  xl={22}
                  lg={24}
                  md={24}
                  sm={24}
                  xs={24}
                  className={styles["empty-detail-wrapper-row"]}
                >
                  {item.map((items, indexs) => {
                    return (
                      <div key={`list${Math.random()}`}>
                        <span>{Object.keys(items)[0]}</span>
                        <Tooltip
                          placement="right"
                          title={Object.values(items)[0]}
                        >
                          <span>{Object.values(items)[0]}</span>
                        </Tooltip>
                      </div>
                    );
                  })}
                </Col>
              );
            })}
          </Row>
          {Effect && <Effect params={params} />}
        </section>
      );
    }
  };
  return type == "panel" ? listResult[type]() : listResult[type];
}

export default {
  name: "EListHoc",
  component: EListHoc
};
