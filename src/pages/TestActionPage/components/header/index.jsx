import { useForm } from "react-hook-form";
import world from "../../../../assets/header-logo.svg";
import level from "../../../../assets/level.svg";
import weight from "../../../../assets/weight.svg";
import { Form, FormField } from "../../../../newcomponents/ui/form";
import HeaderSelect from "../header-select";
import { orders, status } from "../../../../static/data";
import { Button } from "../../../../newcomponents/ui/button";
import HeaderInput from "../header-input";
import useSWRMutation from "swr/mutation";
import { fightInfosEndpoints } from "../../../../services/api/endponits";
import { updateState } from "../../../../services/api/requests";
import { useNavigate } from "react-router-dom";

export default function FormHeader({ match }) {
  const navigate = useNavigate();

  const form = useForm({
    values: {
      author: match?.author,
      order: match?.order,
      status: match?.status,
      check_author: match?.check_author,
    },
  });

  const { data: state, trigger: changeState } = useSWRMutation(fightInfosEndpoints.changeState(match?.id), updateState);

  const onSubmit = async (data) => {
    try {
      const res = await changeState(data);
      setTimeout(() => {
        navigate("/");
      }, 10);
      console.log("res", res);
    } catch (err) {
      console.log("state error", err);
    }
  };

  // Match ID input removing !!
  // Check_author field must be added !!
  // Error page add
  // Loading component add

  return (
    <Form {...form}>
      <form className="form text-[#fff] flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="form-upper flex gap-3 items-center self-center">
          <h3 className="text-[30px] font-bold text-[#3D50B5]">World Championship</h3>
          <div className="header-icon">
            <img src={world} alt="world" />
          </div>
          <p className="wrestling-type text-2xl text-[#30CD36]">{match?.wrestling_type} Wrestling</p>
        </div>
        <div className="form-bottom flex items-start gap-7">
          <div className="left-form-header bg-[#151B43] basis-[25%] py-5 px-12 rounded flex flex-col gap-3">
            <FormField
              control={form.control}
              name="match_id"
              render={({ field }) => (
                <HeaderInput field={field} name={"Match ID"} disabled={true} placeholder={match?.id} />
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => <HeaderInput field={field} name={"Author"} disabled={false} />}
            />
          </div>
          <div className="middle-form-header bg-[#151B43] basis-[55%] rounded py-5 px-7">
            <div className="content-middle bg-[#1C2142] rounded flex flex-col gap-3">
              <p className="stage text-2xl text-center text-wOrange">{match?.stage} - stage</p>
              <div className="level-weight flex justify-center items-center gap-7">
                <div className="level flex items-center gap-3 px-5">
                  <p>{match?.level}</p>
                  <div className="level-icon">
                    <img src={level} alt="level" />
                  </div>
                </div>
                <div className="weight flex items-center gap-3 px-5">
                  <p className="kg">{match?.weight_category}</p>
                  <div className="weight-icon">
                    <img src={weight} alt="weight" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-form-header bg-[#151B43] text-[#000] basis-[20%] py-5 px-11 flex flex-col gap-3">
            <FormField
              control={form.control}
              name="order"
              render={({ field }) => <HeaderSelect field={field} datas={orders} />}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => <HeaderSelect field={field} datas={status} />}
            />
            <Button>Final Submit</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
