import React from "react";
import HelpPageWrapper from "./HelpPageWrapper";
import Layout from "../../shared/ui/Layout/Layout";

const HelpPage: React.FC = () => {
  console.log("helps");
  const reglaments = [
    { reglamentName: "Регламент 1", reglamentLink: "" },
    { reglamentName: "Регламент 2", reglamentLink: "" },
    { reglamentName: "Регламент 3", reglamentLink: "" },
    { reglamentName: "Регламент 4", reglamentLink: "" },
    { reglamentName: "Регламент 5", reglamentLink: "" },
  ];

  return (
    <Layout title="Помощь">
      <HelpPageWrapper>
        <div className="block">
          <a href="" className="link">
            Пользовательская документация
          </a>
          <a href="" className="link">
            Журнал регистрации ошибок, замечаний и предложений по работе в
            системе «Шаблон приложения»
          </a>
          <div className="reglaments">
            <p className="title">Регламенты для ознакомления:</p>
            {reglaments.map((reglament) => (
              <a
                href={reglament.reglamentLink}
                className="link link-download"
                key={reglament.reglamentName}
              >
                {reglament.reglamentName}
              </a>
            ))}
          </div>
        </div>
        <div className="block">
          <p className="title">
            Если у Вас возникли вопросы по работе в системе:
          </p>
          <li className="li">позвоните по номеру телефона 9-66-99</li>
        </div>
      </HelpPageWrapper>
    </Layout>
  );
};

export default HelpPage;
