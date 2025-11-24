import Button from "../button/Button";

const ButtonVariants = () => {
  return (
    <div className="primary-container p-6">
      <div className="grid grid-cols-7">
        <p className="form-sub-heading"></p>
        <p className="form-sub-heading">Status: Default</p>
        <p className="form-sub-heading">Status: Hover</p>
        <p className="form-sub-heading">Status: Focus</p>
        <p className="form-sub-heading">Status: Disabled</p>
        <p className="form-sub-heading">Status: Active</p>
        <p className="form-sub-heading">Status: Loading</p>
      </div>
      <div className="flex flex-col gap-4">
        {/* PRIMARY-BUTTONS */}
        <div className="grid grid-cols-7 place-content-center place-items-center gap-4">
          <h4 className="form-heading">PRIMARY-BUTTONS </h4>
          <Button className="w-fit" size="lg" variant="primary">
            Button
          </Button>
          <Button className="w-fit" size="md" variant="primary">
            Button
          </Button>
          <Button className="w-fit" size="sm" variant="primary">
            Button
          </Button>
          <Button disabled={true} className="w-fit" size="sm" variant="primary">
            Button
          </Button>
          <Button active className="w-fit" size="sm" variant="primary">
            Button
          </Button>
          <div className="flex items-center gap-4">
            <Button
              loading={true}
              className="w-fit"
              size="lg"
              variant="primary"
            >
              Button
            </Button>
            <Button
              loading={true}
              className="w-fit"
              size="md"
              variant="primary"
            >
              Button
            </Button>
            <Button
              loading={true}
              className="w-fit"
              size="sm"
              variant="primary"
            >
              Button
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-7 place-content-center place-items-center gap-4">
          <h4 className="form-heading">SECONDARY-BUTTONS </h4>
          <Button className="w-fit" size="lg" variant="secondary">
            Button
          </Button>
          <Button className="w-fit" size="md" variant="secondary">
            Button
          </Button>
          <Button className="w-fit" size="sm" variant="secondary">
            Button
          </Button>
          <Button
            disabled={true}
            className="w-fit"
            size="sm"
            variant="secondary"
          >
            Button
          </Button>
          <Button active className="w-fit" size="sm" variant="secondary">
            Button
          </Button>
          <div className="flex items-center gap-4">
            <Button
              loading={true}
              className="w-fit"
              size="lg"
              variant="secondary"
            >
              Button
            </Button>
            <Button
              loading={true}
              className="w-fit"
              size="md"
              variant="secondary"
            >
              Button
            </Button>
            <Button
              loading={true}
              className="w-fit"
              size="sm"
              variant="secondary"
            >
              Button
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-7 place-content-center place-items-center gap-4">
          <h4 className="form-heading">Tertiary-BUTTONS </h4>
          <Button className="w-fit" size="lg" variant="tertiary">
            Button
          </Button>
          <Button className="w-fit" size="md" variant="tertiary">
            Button
          </Button>
          <Button className="w-fit" size="sm" variant="tertiary">
            Button
          </Button>
          <Button
            disabled={true}
            className="w-fit"
            size="sm"
            variant="tertiary"
          >
            Button
          </Button>
          <Button active className="w-fit" size="sm" variant="tertiary">
            Button
          </Button>
          <div className="flex items-center gap-4">
            <Button
              loading={true}
              className="w-fit"
              size="lg"
              variant="tertiary"
            >
              Button
            </Button>
            <Button
              loading={true}
              className="w-fit"
              size="md"
              variant="tertiary"
            >
              Button
            </Button>
            <Button
              loading={true}
              className="w-fit"
              size="sm"
              variant="tertiary"
            >
              Button
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-7 place-content-center place-items-center gap-4">
          <h4 className="form-heading">BLAnk-BUTTONS </h4>
          <Button className="w-fit" size="lg" variant="blank">
            Button
          </Button>
          <Button className="w-fit" size="md" variant="blank">
            Button
          </Button>
          <Button className="w-fit" size="sm" variant="blank">
            Button
          </Button>
          <Button disabled={true} className="w-fit" size="sm" variant="blank">
            Button
          </Button>
          <Button active className="w-fit" size="sm" variant="blank">
            Button
          </Button>
          <div className="flex items-center gap-4">
            <Button loading={true} className="w-fit" size="lg" variant="blank">
              Button
            </Button>
            <Button loading={true} className="w-fit" size="md" variant="blank">
              Button
            </Button>
            <Button loading={true} className="w-fit" size="sm" variant="blank">
              Button
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-7 place-content-center place-items-center gap-4">
          <h4 className="form-heading">DANGER-BUTTONS </h4>
          <Button className="w-fit" size="lg" variant="danger">
            Button
          </Button>
          <Button className="w-fit" size="md" variant="danger">
            Button
          </Button>
          <Button className="w-fit" size="sm" variant="danger">
            Button
          </Button>
          <Button disabled={true} className="w-fit" size="sm" variant="danger">
            Button
          </Button>
          <Button active className="w-fit" size="sm" variant="danger">
            Button
          </Button>
          <div className="flex items-center gap-4">
            <Button loading={true} className="w-fit" size="lg" variant="danger">
              Button
            </Button>
            <Button loading={true} className="w-fit" size="md" variant="danger">
              Button
            </Button>
            <Button loading={true} className="w-fit" size="sm" variant="danger">
              Button
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonVariants;
