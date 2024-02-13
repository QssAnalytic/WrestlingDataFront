import TestForm from "../TestActionPage/components/TestForm/index";
import TestHeader from "../TestActionPage/components/TestHeader/index";
export default function TestActionPage() {
  return (
    <>
      <div className="test-action-page container flex flex-col gap-6">
        <TestHeader />
        <TestForm />
      </div>
    </>
  );
}
