import { useForm } from "react-hook-form";
import world from '../../../../assets/header-logo.svg'
import level from "../../../../assets/level.svg";
import weight from "../../../../assets/weight.svg";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../newcomponents/ui/form";
import { Input } from "../../../../newcomponents/ui/input";
import { cn } from "../../../../lib/utils";

export default function FormHeader() {
  const form = useForm();

  return (
    <Form {...form}>
      <form className="form text-[#fff] flex flex-col gap-4">
        <div className="form-upper flex gap-3 items-center self-center">
            <h3 className="text-[30px] font-bold text-[#3D50B5]">World Championship</h3>
            <div className="header-icon">
                <img src={world} alt="world" />
            </div>
            <p className="wrestling-type text-2xl text-[#30CD36]">Freestyle Wrestling</p>
        </div>
        <div className="form-bottom flex items-start gap-7">
          <div className="left-form-header bg-[#151B43] basis-[25%] py-5 px-12 rounded flex flex-col gap-3">
            <FormField
              control={form.control}
              name="match_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Match ID</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="936651"
                      className={cn("placeholder:text-[#30CD36] bg-[#080C2B] border-none disabled:opacity-100")}
                      disabled
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Author" className={cn("bg-[#080C2B] border-none")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="middle-form-header bg-[#151B43] basis-[55%] rounded py-5 px-7">
            <div className="content-middle bg-[#1C2142] rounded flex flex-col gap-3">
              <p className="stage text-2xl text-center text-wOrange">Semifinal - stage</p>
              <div className="level-weight flex justify-center items-center gap-7">
                <div className="level flex items-center gap-3 px-5">
                  <p>Seniors</p>
                  <div className="level-icon">
                    <img src={level} alt="level" />
                  </div>
                </div>
                <div className="weight flex items-center gap-3 px-5">
                  <p className="kg">45</p>
                  <div className="weight-icon">
                    <img src={weight} alt="weight" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-form-header bg-[#151B43] basis-[20%] py-5 px-11"></div>
        </div>
      </form>
    </Form>
  );
}
