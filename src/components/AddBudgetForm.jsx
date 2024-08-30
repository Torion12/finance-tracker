import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";
import { waait } from "../Helper";

export const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            required
            ref={focusRef}
            placeholder="e.g., Groceries
          "
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudget">Amount</label>
          <input
            type="number"
            step="0.1"
            name="newBudgetAmount"
            id="newBudgetAmount"
            required
            placeholder="e.g., 300ph"
            inputMode="decimal"
          />
          <input type="hidden" name="_action" value="createdBudget" />
          <button
            type="submit"
            className="btn btn--dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>Submitting......</span>
            ) : (
              <>
                <span> Create Budget</span>
                <CurrencyDollarIcon width={20} />
              </>
            )}
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
};
