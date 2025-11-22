import { FlagIcon, LogoIcon, QuestionMarkIcon } from "../atoms/icon/Icon";
import Button from "../atoms/button/Button";
import Footer from "../organisms/Footer";
import LinkPath from "../atoms/button/LinkPath";
import { Link } from "react-router-dom";
import Input from "../atoms/input/Input";
import { footerItems } from "../../utils/Helper";

const Forgetpage = () => {
  return (
    <section className="primary-container flex h-dvh flex-col justify-between gap-3 md:gap-6">
      <div className="flex items-center justify-between py-3 sm:py-5">
        <Link to={"/"}>
          <LogoIcon />
        </Link>
        <Button variant="blank">
          <QuestionMarkIcon />
          Assistenza
          <span className="line-hover"></span>
        </Button>
      </div>
      <div className="no-scrollbar mx-auto flex max-w-[400px] flex-col items-center overflow-auto">
        <FlagIcon />
        <h2 className="form-heading mt-6 mb-2 md:mt-8 lg:mt-12">
          Qual è la tua email?
        </h2>
        <p className="form-sub-heading mt-4 max-w-[400px]">
          Inserisci il tuo indirizzo email e ti invieremo un link per cambiare
          la tua password.
        </p>
        <Input
          placeholder="Inserisci il tuo indirizzo email"
          className="mt-4 mb-4 md:mt-8"
          type="text"
        />
        <Button variant="primary">Invia link di recupero</Button>
        <LinkPath path="/" className="mt-4 md:mt-8">
          Torna indietro
        </LinkPath>
      </div>
      <div className="leading-l2 text-secondary mx-auto flex max-w-[530px] flex-wrap items-center justify-center gap-3 py-3 text-xs sm:gap-4 sm:py-5 sm:text-sm md:py-6">
        {footerItems.map((item, index) => (
          <Footer item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Forgetpage;
