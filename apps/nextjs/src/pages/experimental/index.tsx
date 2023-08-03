import { api } from '../../utils/api';

export default function experimental() {
  const { data } = api.auth.getSecretMessage.useQuery();
  return <h1>{data}</h1>;
}
