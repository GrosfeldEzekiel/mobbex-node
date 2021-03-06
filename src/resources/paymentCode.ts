import Request from "../requests";
import schema from "../models/paymentCodeModel";
import { objectToUrl } from "../utils/paramsUrl";

export class PaymentCode {
  requestManager: Request = new Request();
  create(
    code: string,
    object: Record<string, string | number | boolean>
  ): Promise<unknown> {
    const params = objectToUrl(schema, object);
    return this.requestManager.create({
      path: `/payment_code/gen/${code}?${params}`,
      method: "GET",
    });
  }
}

export default new PaymentCode();
