# Shipping Label Maker

Shipping Label Maker is an application that collects shipping information from the user and prints a shipping label.

## Developer

Owen Liversidge - Junior web developer from Atlanta, GA.

## Sample App

Heroku: https://shipping-label-maker.herokuapp.com/

## Notes

This app is being built under the instructions provided by Publicis Sapient. It is currently still under construction.

I have built the app to the best of my abilities, although I had to approach some of the instructions differently, to match my current knowledge base. So, the app is functioning as intended, but the following guidelines were not used as instructed:

• Shipping option should be defined as the following enumeration:

```
const ShippingOption = {
    ground: 1,
    priority: 2
};
```

• onAction(action) is called when the step wants the wizard to take an action. Action is defined as the following enumeration:

```
const WizardAction = {
    prev: 1,
    next: 2,
    end: 3
};
```

• The formula for shipping cost is used, but does not implement the class value, connecting to the enumeration (above).

I intend to continue updating this app after submission, and implemet the above instructions.

## Build instructions

```
git clone https://github.com/vertigojones/shipping-label-maker
```

```
cd shipping-label-maker
```

```
npm i
```

```
npm start
```
