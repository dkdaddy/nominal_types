namespace type_intersection {

    type Computer = {cpu: string, cores: number};
    type Heater = {watts: number};

    type HotComputer = Computer & Heater;

    type ComputerOrHeater = Computer | Heater;

    let myDesktopPC: HotComputer;

    let box: ComputerOrHeater;

    myDesktopPC = {cpu:'Intel', cores:4};
    myDesktopPC = {watts:700};
    myDesktopPC = {cpu:'Intel', cores:4, watts:700};

    box = {cpu:'Intel', cores:4};
    box = {watts: 600};

    box = myDesktopPC;    

    // Union types of intrinic types can be created but they are disjoint sets
    type StringOrNumber = string | number;

    let x: StringOrNumber = 'bob';
    let y: StringOrNumber = 42;

    // Intersection types of intrinsic types can be defined but no instances can be created
    type StringAndNumber = string & number;

    // type of z is never
    let z: StringAndNumber;

}