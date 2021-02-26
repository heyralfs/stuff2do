import React from "react";
import { faPalette, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FloatButton, ThemeButton, Title } from "./style";
import Modal from "../Modal";

function ThemeHandler({ themes, setPreferences }) {
  const [isThemeModalActive, setIsThemeModalActive] = React.useState(false);

  const {
    Default,
    AHappyDayOnTheBeach,
    DamnGoodCoffee,
    TurnThatLightOff,
  } = themes;

  return (
    <>
      {isThemeModalActive && (
        <Modal>
          <Title>Select your theme</Title>
          <ThemeButton
            className="Default"
            onClick={() => setPreferences(Default)}
            bgColor={Default.widgetBg}
            borderColor={Default.bgColor}
            color={Default.titleColor}
          >
            Default
          </ThemeButton>

          <ThemeButton
            className="AHappyDayOnTheBeach"
            onClick={() => setPreferences(AHappyDayOnTheBeach)}
            bgColor={AHappyDayOnTheBeach.widgetBg}
            borderColor={AHappyDayOnTheBeach.bgColor}
            color={AHappyDayOnTheBeach.titleColor}
          >
            A Happy Day On The Beach
          </ThemeButton>

          <ThemeButton
            className="DamnGoodCoffee"
            onClick={() => setPreferences(DamnGoodCoffee)}
            bgColor={DamnGoodCoffee.widgetBg}
            borderColor={DamnGoodCoffee.bgColor}
            color={DamnGoodCoffee.titleColor}
          >
            Damn Good Coffee
          </ThemeButton>

          <ThemeButton
            className="TurnThatLightOff"
            onClick={() => setPreferences(TurnThatLightOff)}
            bgColor={TurnThatLightOff.widgetBg}
            borderColor={TurnThatLightOff.bgColor}
            color={TurnThatLightOff.titleColor}
          >
            Turn That Light Off
          </ThemeButton>

          <ThemeButton onClick={() => setIsThemeModalActive(false)}>
            <FontAwesomeIcon icon={faSave} />
          </ThemeButton>
        </Modal>
      )}

      <FloatButton onClick={() => setIsThemeModalActive(true)}>
        <FontAwesomeIcon icon={faPalette} />
      </FloatButton>
    </>
  );
}

export default ThemeHandler;
