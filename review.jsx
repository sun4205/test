const Avatar = ({ avatar, name }) => {
    const [error, setError] = useState(false);
  
    const userInitial = name ? name[0].toUpperCase() : "?";
  
    React.useEffect(() => {
      if (avatar && avatar !== "" && error) {
        setError(false);
      }
    }, [avatar]);
  
    
  };
  
  export default Avatar;
  