import { ToolbarProps, View } from "react-big-calendar";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import { BiPlusCircle } from "react-icons/bi";
import { colors } from "../../../../shared/assets/colors";

type Props = ToolbarProps & {
  onClickAdd: () => void;
};

const CustomToolbar = (props: Props) => (
    <div className="rbc-toolbar toolbar">
      <div className="toolbar-first">
        <span className="rbc-toolbar-label">{props.label}</span>

        <div className="button-group">
          <div className="button-group-3">
            <button
              type="button"
              className="button-group-3-item"
              onClick={() => props.onNavigate("PREV")}
            >
              <BiSolidChevronLeft className="arrow" />
            </button>

            <button
              type="button"
              className="button-group-3-item"
              onClick={() => props.onNavigate("TODAY")}
            >
              Сегодня
            </button>

            <button
              type="button"
              className="button-group-3-item"
              onClick={() => props.onNavigate("NEXT")}
            >
              <BiSolidChevronRight className="arrow" />
            </button>
          </div>

          <button
            type="button"
            className="button-group-add"
            onClick={props.onClickAdd}
          >
            <BiPlusCircle size={18} color={colors["light"].brightOrange} />

            <p>Создать</p>
          </button>
        </div>
      </div>

      <span className="rbc-btn-group">
        {props.views.map((view: View) => {
          const localizedView = props.localizer.messages[view];
          return (
            <button
              type="button"
              key={view}
              className={props.view === view ? "rbc-btn-active" : ""}
              onClick={() => props.onView(view)}
            >
              {localizedView}
            </button>
          );
        })}
      </span>
    </div>
  );

export default CustomToolbar;
