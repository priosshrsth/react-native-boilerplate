## Setup Linux environment for development

### 1. Instal Node js

First we're going to be installing node js using a version manager called [ASDF](https://asdf-vm.com/).
The reason we use ASDF over nvm, or others is that ASDF can manage other languages like ruby too.

Installing asdf is a simple two step process. First you install asdf, and then add it to your shell:

```bash
cd
git clone https://github.com/excid3/asdf.git ~/.asdf
echo '. "$HOME/.asdf/asdf.sh"' >> ~/.bashrc
echo '. "$HOME/.asdf/completions/asdf.bash"' >> ~/.bashrc
echo 'legacy_version_file = yes' >> ~/.asdfrc
echo 'export EDITOR="code --wait"' >> ~/.bashrc
exec $SHELL
```
Then we can install ASDF plugins for each language we want to use. For Rails, we can install Ruby and Node.js for our frontend Javascript.

```bash
asdf plugin add nodejs
```
To install Node and set the default version, we'll run the following commands:

```bash
asdf install nodejs latest
asdf global nodejs latest
```

We can check the installation status.

```bash
which node
#=> /home/username/.asdf/shims/node
node -v
#=> 18.15.0
```
##
##

### 2. Install Open Jdk

```bash
sudo apt install openjdk-11-jdk
```
> Note:- We are not installing later version of openjdk because, it is not recommended for react native. Also, instead of installing jdk we can use jre as well.

Check java installation status
```bash
java --version
```

The output should be something like this:
```
openjdk 11.0.18
OpenJDK Runtime Environment (build 11.0.18+10-post-Ubuntu-0ubuntu122.04)
OpenJDK 64-Bit Server VM (build 11.0.18+10-post-Ubuntu-0ubuntu122.04, mixed mode, sharing)
```
##
##

### 3. Install Android Studio
Install fuse require to install AppImage in ubuntu.
```bash
sudo apt install libfuse2
```

Go to [Jetbrains Toolbox download page](https://www.jetbrains.com/toolbox-app/)
Extract the toolbox and docuble click the file `jetbrains-toolbox` to run it. This should install the Jetbrains toolbox allowing us to install any Jetbrains product in single click.

**Install the Android Studio from toolbox.**

Now you can find the Android Studio in your available apps. Alternatively, you can run the app from Toolbox as well. This will start **Android Studio Setup Wizard**.

While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

- Android SDK
- Android SDK Platform
- Android Virtual Device

Then, click "Next" to install all of these components.

If the checkboxes are grayed out, you will have a chance to install these components later on.

Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.
##
##

### 4. Install the Android SDK
Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 13 (Tiramisu) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

To do that, open Android Studio, click on "Configure" button and select "SDK Manager".

The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 13 (Tiramisu) entry, then make sure the following items are checked:

Android SDK Platform 33
Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 33.0.0 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

##
##

### 5. Configure the ANDROID_HOME environment variable
The React Native tools require some environment variables to be set up in order to build apps with native code.

Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc (if you are using zsh then ~/.zprofile or ~/.zshrc) config file:

export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

.bash_profile is specific to bash. If you're using another shell, you will need to edit the appropriate shell-specific config file.

Type source $HOME/.bash_profile for bash or source $HOME/.zprofile to load the config into your current shell. Verify that ANDROID_HOME has been set by running echo $ANDROID_HOME and the appropriate directories have been added to your path by running echo $PATH.

Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.