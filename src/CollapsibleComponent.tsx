import { FC, ReactNode, useState } from "react";

type Props = {
  children: (collapsed: boolean, toggleCollapse: () => void) => ReactNode;
};

export const CollapsibleComponent: FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return <div>{children(collapsed, toggleCollapse)}</div>;
};

export const HogeComponent = () => {
  return (
    <div>
      <CollapsibleComponent>
        {(collapsed, toggleCollapse) => {
          if (collapsed) {
            return (
              <div>
                <input type="text" value="React 太郎" />
                <button type="button" onMouseEnter={toggleCollapse}>
                  閉じる
                </button>
              </div>
            );
          }
          return (
            <div>
              React 太郎
              <button type="button" onMouseEnter={toggleCollapse}>
                開く
              </button>
            </div>
          );
        }}
      </CollapsibleComponent>
    </div>
  );
};
