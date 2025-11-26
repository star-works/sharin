import { type ChangeEvent } from "react";
import { footerItems } from "../../utils/Helper";
import Button from "../atoms/button/Button";
import LinkPath from "../atoms/button/LinkPath";
import { FlagIcon } from "../atoms/icon/Icon";
import Input from "../atoms/input/Input";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";
import { useEmailValidation } from "../../hooks/useEmailValidation";
import { usePasswordRecovery } from "../../hooks/usePasswordRecovery";

const ForgetPasswordPage = () => {
  const { email, error, setEmail, setError, validateEmail, clearError } =
    useEmailValidation();

  const { loading, handleSubmit } = usePasswordRecovery({
    email,
    validateEmail,
    setError,
  });

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    clearError();
  };

  return (
    <section className="primary-container h-dvh gap-3 md:gap-6">
      <div className="flex h-full flex-col justify-between px-1">
        <Navbar />
        <div className="no-scrollbar mx-auto flex max-w-[400px] flex-col items-center overflow-auto px-1">
          <FlagIcon />
          <h2 className="form-heading mt-6 md:mt-8 lg:mt-12">
            Qual è la tua email?
          </h2>
          <p className="form-sub-heading mt-2 max-w-[400px]">
            Inserisci il tuo indirizzo email e ti invieremo un link per cambiare
            la tua password.
          </p>
          <Input
            placeholder="Inserisci il tuo indirizzo email"
            className="mt-4 mb-4 md:mt-8"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          {error && (
            <p className="text-spiritstoneRed mb-4 w-full pl-1 text-start text-sm">
              {error}
            </p>
          )}
          <Button
            onClick={handleSubmit}
            loading={loading}
            variant="primary"
            size="lg"
            className="w-full"
          >
            Invia link di recupero
          </Button>
          <LinkPath path="/" className="mt-4 md:mt-8">
            Torna indietro
          </LinkPath>
        </div>
        <div className="leading-l2 text-secondary mx-auto flex max-w-[530px] flex-wrap items-center justify-center gap-x-4 gap-y-2 py-6 text-sm sm:gap-4">
          {footerItems.map((item, index) => (
            <Footer item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForgetPasswordPage;